package model;

public class Moradores {

    private int id;
    private String numeroPessoa;
    private String idCasa;
    private String nome;
    private String situacaoFamiliar;
    private String sexo;
    private String idade;
    private String grau;
    private String setor;
    private String renda;
    private String viajens;
    private String digitador;

    public String getDigitador() {
        return digitador;
    }

    public void setDigitador(String digitador) {
        this.digitador = digitador;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIdCasa() {
        return idCasa;
    }

    public void setIdCasa(String idCasa) {
        this.idCasa = idCasa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSituacaoFamiliar() {
        return situacaoFamiliar;
    }

    public void setSituacaoFamiliar(String situacaoFamiliar) {
        this.situacaoFamiliar = situacaoFamiliar;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getGrau() {
        return grau;
    }

    public void setGrau(String grau) {
        this.grau = grau;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public String getRenda() {
        return renda;
    }

    public void setRenda(String renda) {
        this.renda = renda;
    }

    public String getViajens() {
        return viajens;
    }

    public void setViajens(String viajens) {
        this.viajens = viajens;
    }

    public String getNumeroPessoa() {
        return numeroPessoa;
    }

    public void setNumeroPessoa(String numeroPessoa) {
        this.numeroPessoa = numeroPessoa;
    }

    @Override
    public String toString() {
        return "Moradores{" + "id=" + id + ", numeroPessoa=" + numeroPessoa + ", idCasa=" + idCasa + ", nome=" + nome + ", situacaoFamiliar=" + situacaoFamiliar + ", sexo=" + sexo + ", idade=" + idade + ", grau=" + grau + ", setor=" + setor + ", renda=" + renda + ", viajens=" + viajens + ", digitador=" + digitador + '}';
    }

    

}
