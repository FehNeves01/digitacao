/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controler;

import dao.DaoFormulario;
import dao.DaoOpniao;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Opniao;
import toolBox.EnviaJSON;

/**
 *
 * @author felipeneves
 */
@WebServlet(name = "ApiOpniao", urlPatterns = {"/apiopniao"})
public class ApiOpniao extends HttpServlet {

    private HttpServletRequest request;
    private HttpServletResponse response;
    private Opniao opniao;
    private List<Opniao> listOpniao;
    private DaoOpniao daoOpniao;

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
        System.out.println("Chegou Aqui!");
        processRequest();

    }

    protected void processRequest() throws ServletException, IOException {
        switch (request.getParameter("acao")) {
            case "cadastraOpniao":
                cadastraOpniao();
                break;
            case "buscaOpniao":
                buscandoOpnioes();
                break;
        }

    }

    /*
        "&numFormulario=" + numFormulario
        + "&data=" + data
        + "&horaEntr=" + horaEntr
        + "&horaViag=" + horaViag
        + "&linha=" + linha
        + "&um=" + um
        + "&dois=" + dois
        + "&tres=" + tres
        + "&quatro=" + quatro
        + "&cinco=" + cinco
        + "&seis=" + seis
        + "&sete=" + sete
        + "&oito=" + oito
        + "&oito=" + oito
        + "&dez=" + dez
        + "&onze=" + onze
        + "&doze=" + doze
        + "&treze=" + treze
        + "&quatorze=" + quatorze
        + "&quinze=" + quinze
        + "&dezesseis=" + dezesseis
        + "&dezessete=" + dezessete
        + "&dezoito=" + dezoito
        + "&dezenove=" + dezenove
        + "&vinte=" + vinte
        + "&vinteEum=" + vinteEum
    
     */
    private void cadastraOpniao() {
        opniao = new Opniao();

        opniao.setNumformulario(requisicoes("numFormulario"));
        opniao.setData(requisicoes("data"));
        opniao.setHora(requisicoes("horaEntr"));
        opniao.setHoraviagem(requisicoes("horaViag"));
        opniao.setLinha(requisicoes("linha"));
        opniao.setUm(requisicoes("um"));
        opniao.setDois(requisicoes("dois"));
        opniao.setTres(requisicoes("tres"));
        opniao.setQuatro(requisicoes("quatro"));
        opniao.setCinco(requisicoes("cinco"));
        opniao.setSeis(requisicoes("seis"));
        opniao.setSete(requisicoes("sete"));
        opniao.setOito(requisicoes("oito"));
        opniao.setNove(requisicoes("nove"));
        opniao.setDez(requisicoes("dez"));
        opniao.setOnze(requisicoes("onze"));
        opniao.setDoze(requisicoes("doze"));
        opniao.setTreze(requisicoes("treze"));
        opniao.setQuatorze(requisicoes("quatorze"));
        opniao.setQuinze(requisicoes("quinze"));
        opniao.setDezesseis(requisicoes("dezesseis"));
        opniao.setDezessete(requisicoes("dezessete"));
        opniao.setDezoito(requisicoes("dezoito"));
        opniao.setDezenove(requisicoes("dezenove"));
        opniao.setVinte(requisicoes("vinte"));
        opniao.setVinteeum(requisicoes("vinteEum"));

        System.out.println(opniao.toString());
        daoOpniao = new DaoOpniao(opniao);
        daoOpniao.create();

    }

    private void buscandoOpnioes() {
        listOpniao = new ArrayList<>();
        listOpniao = (List<Opniao>) new DaoOpniao().read();
        EnviaJSON.enviaJson(response, listOpniao);
    }

    private String requisicoes(String retorno) {
        return request.getParameter(retorno);
    }

}
