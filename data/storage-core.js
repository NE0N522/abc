(function (root) {
  const map = root.OX3K_LEGACY_MAP || {};
  const reverse = Object.fromEntries(Object.entries(map).map(([legacy, stable]) => [stable, legacy]));
  const defaults = () => ({schemaVersion: 2, p: {}, own: {}, lvl: 'A1', st: {}, streak: 0, last: '', theme: 'system', slow: false, fontScale: 1, mode: 'stages', updatedAt: 0});
  const toStable = id => map[id] || (reverse[id] ? id : null);
  const toLegacy = id => reverse[id] || id;
  const validRecord = (value, now) => {
    const s = typeof value === 'number' ? value : value && value.s;
    if (![0, 1, 2].includes(Number(s))) return null;
    const status = Number(s);
    const t = Number(value && typeof value === 'object' ? value.t : now) || now;
    const box = Math.max(0, Math.min(6, Number(value && typeof value === 'object' ? value.box : (status === 2 ? 1 : 0)) || 0));
    const due = Number(value && typeof value === 'object' ? value.due : 0) || (status === 2 ? t + 86400000 : 0);
    return {s: status, t, box, due};
  };
  function normalizeState(raw, now = Date.now()) {
    let source = raw;
    if (source && source.data && typeof source.data === 'object') source = source.data;
    if (!source || typeof source !== 'object' || Array.isArray(source) || !source.p || typeof source.p !== 'object' || Array.isArray(source.p)) throw new Error('Invalid progress state');
    const out = defaults();
    out.lvl = ['A1','A2','B1','B2'].includes(source.lvl) ? source.lvl : 'A1';
    out.streak = Math.max(0, Number(source.streak) || 0);
    out.last = typeof source.last === 'string' ? source.last : '';
    out.theme = ['system','light','dark'].includes(source.theme) ? source.theme : 'system';
    out.slow = !!source.slow;
    out.fontScale = Math.max(.9, Math.min(1.15, Number(source.fontScale) || 1));
    out.mode = source.mode === 'today' ? 'today' : 'stages';
    out.updatedAt = Number(source.updatedAt) || 0;
    if (source.st && typeof source.st === 'object' && !Array.isArray(source.st)) {
      for (const level of ['A1','A2','B1','B2']) out.st[level] = Math.max(0, Number(source.st[level]) || 0);
    }
    for (const [oldId, value] of Object.entries(source.p)) {
      const id = toStable(oldId);
      const record = validRecord(value, now);
      if (id && record) out.p[id] = record;
    }
    if (source.own && typeof source.own === 'object' && !Array.isArray(source.own)) {
      for (const [oldId, values] of Object.entries(source.own)) {
        const id = toStable(oldId);
        if (id && Array.isArray(values)) out.own[id] = values.filter(x => typeof x === 'string').slice(0, 100);
      }
    }
    return out;
  }
  function mergeStates(...states) {
    const valid = states.filter(Boolean).map(s => normalizeState(s));
    const merged = defaults();
    for (const state of valid) {
      for (const [id, record] of Object.entries(state.p)) {
        const previous = merged.p[id];
        if (!previous || record.t > previous.t) merged.p[id] = record;
      }
      for (const [id, values] of Object.entries(state.own)) {
        if (!merged.own[id] || (state.updatedAt >= merged.updatedAt)) merged.own[id] = values;
      }
      if (state.updatedAt >= merged.updatedAt) {
        for (const key of ['lvl','st','streak','last','theme','slow','fontScale','mode']) merged[key] = state[key];
        merged.updatedAt = state.updatedAt;
      }
    }
    return merged;
  }
  function statusCounts(state) {
    const out = {known: 0, review: 0, new: 0};
    for (const value of Object.values(state.p || {})) {
      const s = typeof value === 'number' ? value : value && value.s;
      if (s === 2) out.known++; else if (s === 1) out.review++; else out.new++;
    }
    return out;
  }
  function checksum(value) {
    const text = typeof value === 'string' ? value : JSON.stringify(value);
    let hash = 2166136261;
    for (let i = 0; i < text.length; i++) { hash ^= text.charCodeAt(i); hash = Math.imul(hash, 16777619); }
    return (hash >>> 0).toString(16).padStart(8, '0');
  }
  function validateImport(payload) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('Файл должен содержать JSON-объект');
    if (payload.data) {
      if (!payload.data.p || typeof payload.data.p !== 'object' || Array.isArray(payload.data.p)) throw new Error('В файле нет корректного прогресса');
      const expected = checksum(payload.data);
      if (payload.checksum && payload.checksum !== expected) throw new Error('Контрольная сумма не совпадает');
      return normalizeState(payload.data);
    }
    return normalizeState(payload);
  }
  function parseStored(raw, now = Date.now()) { try { return {state: normalizeState(JSON.parse(raw), now), quarantine: null, error: null}; } catch (error) { return {state: null, quarantine: raw, error}; } }
  async function writeWithFallback(value, primary, fallback) { const errors=[];let primaryOk=false,fallbackOk=false;try{await primary(value);primaryOk=true}catch(error){errors.push(error)}try{await fallback(value);fallbackOk=true}catch(error){errors.push(error)}return {ok:primaryOk||fallbackOk,primaryOk,fallbackOk,errors}; }
  root.OX3KStorageCore = {toStable, toLegacy, normalizeState, mergeStates, statusCounts, checksum, validateImport, parseStored, writeWithFallback};
  if (typeof module !== 'undefined' && module.exports) module.exports = root.OX3KStorageCore;
})(typeof window !== 'undefined' ? window : globalThis);
