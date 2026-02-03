const cds = require('@sap/cds')

module.exports = async function (srv) {

  // 👇 Nombre EXACTO del servicio remoto
  const bp = await cds.connect.to('BusinessPartnerA2X')

  // 👇 HANDLER DIRECTO (esto evita el genérico)
  srv.on('READ', 'A_BusinessPartner', async (req) => {

    // Clonar query para evitar mutaciones raras
    const query = JSON.parse(JSON.stringify(req.query))

    // ❌ eliminar skip/top (no soportado)
    if (query.SELECT && query.SELECT.limit) {
      delete query.SELECT.limit
    }

    return bp.run(query)
  })
}