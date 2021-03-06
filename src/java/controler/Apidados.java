package controler;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.DaoCasa;
import dao.DaoMoradores;
import dao.DaoViajens;
import java.util.List;
import model.Casa;
import model.Moradores;
import model.Viajens;
import toolBox.EnviaJSON;

/**
 * Servlet implementation class Apidados
 */
@WebServlet("/apidados")
public class Apidados extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public Apidados() {
        super();
        // TODO Auto-generated constructor stub
    }

    private HttpServletRequest request;
    private HttpServletResponse response;
    private Casa casa;
    private Viajens viajens;
    private Moradores moradores;
    private ArrayList<Moradores> listMoradores;
    private List<Viajens> listViajens;
    private ArrayList<Casa> listCasa;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        this.request = request;
        this.response = response;

        processRequest();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        this.request = request;
        this.response = response;

        processRequest();

    }

    private void processRequest() throws IOException {

//        new CreateDataBase();
        switch (request.getParameter("acao")) {
            case "cadCasaMoradores":
                cadastraCasasEmoradores();
                break;
            case "cadViagens":
                cadastraViajens();
                break;
            case "buscaPesquisas":
                buscaPesquisas();
                break;
            case "buscarPesquisaSelecionadaViajens":
                buscarPesquisaSelecionadaViajens();
                break;
            case "buscarPesquisaSelecionadaViajensTodas":
                buscarPesquisaSelecionadaViajensTodas();
                break;
            case "buscarPesquisaSelecionadaMoradores":
                buscarPesquisaSelecionadaMoradores();
                break;
            case "buscarPesquisaSelecionadaCasa":
                buscarPesquisaSelecionadaCasa();
                break;
            case "buscaDadosPesquisas":
                buscarDadosPesquisas();
                break;
            case "buscaDadosViagens":
                buscaDadosViagens();
                break;
            case "atualizaCadCasaMoradores":
                atualizaCadCasaMoradores();
                break;
            case "atualizaCadCasa":
                atualizaCadCasa();
                break;
            case "atualizaCadViagens":
                atualizaCadViagens();
                break;
            case "buscaDadosCasas":
                buscasDadosCasas();
                break;
            case "buscaDadosMoradores":
                buscaDadosMoradores();
                break;
            case "buscaDadosViagensBanco":
                buscaDadosViagensBanco();
                break;
            case "deletarTudo":
                deletarTudo();
                break;
        }
    }

    // s para amenizar a quantidade de caractere pra digitar
    private String requisicoes(String retorno) {
        return request.getParameter(retorno);
    }

    private void preparaJSON() {
        listMoradores = (ArrayList<Moradores>) new DaoMoradores().read(requisicoes("id_casa"));
        EnviaJSON.enviaJson(response, listMoradores);

    }

    private void cadastraCasasEmoradores() {
        listMoradores = new ArrayList<>();
        casa = new Casa();
        
        casa.setId(requisicoes("id_casa"));
        casa.setLatitude(requisicoes("latitude"));
        casa.setLongitude(requisicoes("longitude"));
        casa.setZona(requisicoes("zona"));
        casa.setFolha(requisicoes("folha"));
        casa.setPontos(requisicoes("ponto"));
        casa.setDigitador(requisicoes("digitador"));

        moradores = new Moradores();
        moradores.setIdCasa(requisicoes("id_casa"));
        moradores.setNumeroPessoa(requisicoes("NumeroPessoa"));
        moradores.setNome(requisicoes("Nome"));
        moradores.setSituacaoFamiliar(requisicoes("Situacao"));
        moradores.setSexo(requisicoes("Sexo"));
        moradores.setIdade(requisicoes("Idade"));
        moradores.setGrau(requisicoes("Instrucao"));
        moradores.setSetor(requisicoes("Atividade"));
        moradores.setRenda(requisicoes("Renda"));
        moradores.setViajens(requisicoes("Viajens"));
        moradores.setDigitador(requisicoes("digitador"));
        moradores.setSetorAtividade(requisicoes("setorAtividade"));

        listMoradores.add(moradores);

        new DaoCasa(casa).create();
        new DaoMoradores(listMoradores).create();

        preparaJSON();
    }

    private void cadastraViajens() {
        listViajens = new ArrayList<>();
        viajens = new Viajens();
        viajens.setNumeroPessoa(requisicoes("recNuPessoas"));
        viajens.setIdCasa(requisicoes("id_casa"));
        viajens.setViajensResidencia(requisicoes("recVresidencia"));
        viajens.setLocal(requisicoes("recLocal"));
        viajens.setHora(requisicoes("recSaida"));
        viajens.setDestino(requisicoes("recDestino"));
        viajens.setZona(requisicoes("recDestZona"));
        viajens.setMot(requisicoes("recMot"));
        viajens.setValue(requisicoes("recModo"));
        viajens.setValue1(requisicoes("recModo1"));
        viajens.setValue2(requisicoes("recModo2"));
        viajens.setCont(requisicoes("recCont"));
        viajens.setDigitador(requisicoes("digitador"));
        viajens.setNumeroViagem(requisicoes("numeroViagem"));
        listViajens.add(viajens);

        new DaoViajens(listViajens).create();

        ArrayList<Viajens> listForJsonViajens = (ArrayList<Viajens>) new DaoViajens().read(viajens.getIdCasa());

        EnviaJSON.enviaJson(response, listForJsonViajens);
    }

    private void buscaPesquisas() {
        listCasa = (ArrayList<Casa>) (List<Casa>) new DaoCasa().read();
        EnviaJSON.enviaJson(response, listCasa);
    }

    private void buscarPesquisaSelecionadaViajens() {
        String parametroIdCasa = requisicoes("idCasa");
        String parametroNumeroPessoa = requisicoes("numPessoa");
        ArrayList<Viajens> listForJsonViajens = (ArrayList<Viajens>) new DaoViajens().readNumeroViagem(parametroIdCasa, parametroNumeroPessoa);
        EnviaJSON.enviaJson(response, listForJsonViajens);
    }

    private void buscarPesquisaSelecionadaViajensTodas() {
        String parametroIdCasa = requisicoes("idCasa");
        ArrayList<Viajens> listForJsonViajens = (ArrayList<Viajens>) new DaoViajens().read(parametroIdCasa);
        EnviaJSON.enviaJson(response, listForJsonViajens);
    }

    private void buscarPesquisaSelecionadaMoradores() {
        String parametro = requisicoes("idCasa");
        ArrayList<Moradores> listForJsonMoradores = (ArrayList<Moradores>) new DaoMoradores().read(parametro);
        EnviaJSON.enviaJson(response, listForJsonMoradores);
    }

    private void buscarPesquisaSelecionadaCasa() {

        String parametro = requisicoes("idCasa");
        listCasa = new ArrayList<>();
        listCasa.add(new DaoCasa().read(parametro));
        EnviaJSON.enviaJson(response, listCasa);
    }

    private void buscarDadosPesquisas() {
        String parametroPessoa = (requisicoes("numeroPessoaSelecionada"));
        String parametroPesquisa = (requisicoes("numeroPesquisaSelecionada"));

        listMoradores = (ArrayList<Moradores>) (List<Moradores>) new DaoMoradores().read(parametroPesquisa, parametroPessoa);
        EnviaJSON.enviaJson(response, listMoradores);
    }

    private void buscaDadosViagens() {
        String parametroIdCasa = requisicoes("idCasa");
        String parametroNumeroViagem = requisicoes("numeroViagem");
        String parametrosNumeroPessoa = requisicoes("numeroPessoa");
        ArrayList<Viajens> listForJsonViajens = (ArrayList<Viajens>) new DaoViajens().read(parametroIdCasa, parametroNumeroViagem, parametrosNumeroPessoa);
        EnviaJSON.enviaJson(response, listForJsonViajens);
    }

    private void atualizaCadCasa() {
        casa = new Casa();
        casa.setId(requisicoes("id_casa"));
        casa.setLatitude(requisicoes("latitude"));
        casa.setLongitude(requisicoes("longitude"));
        casa.setZona(requisicoes("zona"));
        casa.setFolha(requisicoes("folha"));
        casa.setPontos(requisicoes("ponto"));
        new DaoCasa().update(casa);
    }

    private void atualizaCadCasaMoradores() {
        listMoradores = new ArrayList<>();
        moradores = new Moradores();
        moradores.setIdCasa(requisicoes("id_casa"));
        moradores.setNumeroPessoa(requisicoes("NumeroPessoa"));
        moradores.setNome(requisicoes("Nome"));
        moradores.setSituacaoFamiliar(requisicoes("Situacao"));
        moradores.setSexo(requisicoes("Sexo"));
        moradores.setIdade(requisicoes("Idade"));
        moradores.setGrau(requisicoes("Instrucao"));
        moradores.setSetor(requisicoes("Atividade"));
        moradores.setRenda(requisicoes("Renda"));
        moradores.setViajens(requisicoes("Viajens"));
        moradores.setId(Integer.parseInt(requisicoes("idViagens")));
        moradores.setSetorAtividade(requisicoes("setorAtividade"));
        listMoradores.add(moradores);

        new DaoMoradores(listMoradores).update(moradores.getIdCasa());

        listMoradores = (ArrayList<Moradores>) new DaoMoradores().read(moradores.getIdCasa(), moradores.getId());
        EnviaJSON.enviaJson(response, listMoradores);
    }

    private void atualizaCadViagens() {
        listViajens = new ArrayList<>();
        viajens = new Viajens();

        System.out.println(requisicoes("recNuPessoas"));
        System.out.println(requisicoes("id_casa"));
        System.out.println(requisicoes("recVresidencia"));
        System.out.println(requisicoes("recLocal"));
        System.out.println(requisicoes("recSaida"));
        System.out.println(requisicoes("recDestino"));
        System.out.println(requisicoes("recDestZona"));
        System.out.println(requisicoes("recMot"));
        System.out.println(requisicoes("recModo"));
        System.out.println(requisicoes("recModo1"));
        System.out.println(requisicoes("recModo2"));
        System.out.println(requisicoes("recCont"));
        System.out.println(requisicoes("recIdViagens"));
        System.out.println(requisicoes("numeroViagem"));

        viajens.setNumeroPessoa(requisicoes("recNuPessoas"));
        viajens.setIdCasa(requisicoes("id_casa"));
        viajens.setViajensResidencia(requisicoes("recVresidencia"));
        viajens.setLocal(requisicoes("recLocal"));
        viajens.setHora(requisicoes("recSaida"));
        viajens.setDestino(requisicoes("recDestino"));
        viajens.setZona(requisicoes("recDestZona"));
        viajens.setMot(requisicoes("recMot"));
        viajens.setValue(requisicoes("recModo"));
        viajens.setValue1(requisicoes("recModo1"));
        viajens.setValue2(requisicoes("recModo2"));
        viajens.setCont(requisicoes("recCont"));
        viajens.setId(Integer.parseInt(requisicoes("recIdViagens")));
        viajens.setNumeroViagem(requisicoes("numeroViagem"));
        listViajens.add(viajens);

        new DaoViajens(listViajens).update(viajens.getIdCasa());

        listViajens = (List<Viajens>) new DaoViajens().read(viajens.getIdCasa(), viajens.getId());
        EnviaJSON.enviaJson(response, listViajens);

    }

    private void buscasDadosCasas() {
        listCasa = (ArrayList<Casa>) (List<Casa>) new DaoCasa().read();
        EnviaJSON.enviaJson(response, listCasa);

    }

    private void buscaDadosMoradores() {
        listMoradores = (ArrayList<Moradores>) (List<Moradores>) new DaoMoradores().read();
        EnviaJSON.enviaJson(response, listMoradores);
    }

    private void buscaDadosViagensBanco() {
        listViajens = (List<Viajens>) new DaoViajens().read();
        EnviaJSON.enviaJson(response, listViajens);
    }

    private void deletarTudo() {
        new DaoViajens().delete(requisicoes("deletandoTudo"));
        new DaoMoradores().delete(requisicoes("deletandoTudo"));
        new DaoCasa().delete(requisicoes("deletandoTudo"));
    }

}
