function calculaTopOcorrenciasDeQueries(texto,queries,k) {
  /**
 * Retorna os primeiros K termos mais recorrentes na
 * string 'texto'.
 * @param {string} texto O texto de entrada de dados
 * @param {Array} queeries Um array de strings
 * @param {Number} k Um número que determina a quantidade de retornos.
 * @returns {Array} Um array de strings.
 */
    let queriesComIdx = [];
    for (let cdQ of queries) {
        let indice = texto.indexOf(cdQ);
        let count = (texto.match(new RegExp(cdQ, 'g')) || []).length;
        if (indice != -1) {
            queriesComIdx.push({ 'term': cdQ, 'idx': texto.indexOf(cdQ), 'count': count });
        }
    }
    /* Ordenar o aray de objetos */
    queriesComIdx.sort((a, b) => {
        if (b.count == a.count) {
            if (a.idx > b.idx) {
                return 1;
            } else {
                return -1;
            }
        }
        if (a.count < b.count) {
            return 1;
        }
        if (a.count > b.count) {
            return -1;
        }
        return 0;
    });

    arrReturn = queriesComIdx.map((cdItem) => {
        return cdItem['term'];
    });

    return arrReturn.slice(0, k);
}

module.exports = calculaTopOcorrenciasDeQueries
