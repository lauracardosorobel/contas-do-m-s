const frm = document.querySelector("form") 
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")

let numContas = 0 
let valTotal = 0 
let resposta= ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.invalor.value)

    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descriçao + " - R$: " + valor.toFxed(2) + "\n"

    resp1.innerText= `${resposta}---------------------------`
    resp2. InnerText = `${numContas} Contais(s) - Total R$: ${valTotal.toFixed(2)}`
    
    frm.inDescricao.value = ""
    frm.inValor.value = ""
    fr5m.inDescricao.focus()
})