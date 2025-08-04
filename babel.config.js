module.exports = function (api) {
  api.cache(true); // Habilita la caché
  api.cache.forever(); // Configura la caché para que sea permanente
  return {
    plugins: ['macros'],
  };
};
