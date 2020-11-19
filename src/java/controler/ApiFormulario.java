/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controler;

import dao.DaoFormulario;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.GregorianCalendar;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.FormularioRenda;
import toolBox.EnviaJSON;

/**
 *
 * @author felip
 */
@WebServlet(name = "ApiFormulario", urlPatterns = {"/apiformulario"})
public class ApiFormulario extends HttpServlet {

    private HttpServletRequest request;
    private HttpServletResponse response;
    private FormularioRenda formularioRenda;
    private List<FormularioRenda> listForm;
    private DaoFormulario daoFormulario;
    
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

    protected void processRequest()throws ServletException, IOException {
        switch (request.getParameter("acao")) {
            case "cadastraFormulario":
                System.out.println(request.getParameter("acao"));
                cadastraFormulario();
                break;
            case "buscaFormularios":
                buscandoFormularios();
                break;
    }

}

    private void cadastraFormulario() {
        formularioRenda = new FormularioRenda();
        
            formularioRenda.setMacroZonaDiretor(requisicoes("macroZonaDireto"));
            formularioRenda.setZona(requisicoes("zona"));
            formularioRenda.setPopulacaoIbge(requisicoes("populacao"));
            formularioRenda.setNumIBGE(requisicoes("numDomicilio"));
            formularioRenda.setHabitacaoDomicilio(requisicoes("habDomicilio"));
            formularioRenda.setLevantamentoRendaPico(requisicoes("popLevantamentoRendaPico"));
            formularioRenda.setMeioSalario(requisicoes("meioSalario"));
            formularioRenda.setMeioSalarioAum(requisicoes("meioEum"));
            formularioRenda.setUmSalarioAdois(requisicoes("umAdois"));
            formularioRenda.setDoisSalarioAtres(requisicoes("doisAtres"));
            formularioRenda.setTresSalarioAcinco(requisicoes("tresAcinco"));
            formularioRenda.setCincoSalarioAdez(requisicoes("cincoAdez"));
            formularioRenda.setDezSalarioAquinze(requisicoes("dezAquinze"));
            formularioRenda.setQuinzeSalarioAvinte(requisicoes("quinzeAvinte"));
            formularioRenda.setDezAnos(requisicoes("dezAnos"));
            formularioRenda.setSemRedimento(requisicoes("semRedimento"));
            formularioRenda.setComRedimento(requisicoes("comRedimento"));
            formularioRenda.setMenoresDezAnos(requisicoes("menoresDezAnos"));
            formularioRenda.setCensitarios(requisicoes("censitarios"));
            formularioRenda.setAno(new GregorianCalendar().getWeekYear());
            formularioRenda.setCidade(requisicoes("cidade"));
            
            System.out.println(formularioRenda.toString());
            daoFormulario = new DaoFormulario(formularioRenda);
            daoFormulario.create();
            
            
    }
    
    private void buscandoFormularios() {
        listForm = new ArrayList<>();
        listForm = (List<FormularioRenda>) new DaoFormulario().read();
        EnviaJSON.enviaJson(response, listForm);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    private String requisicoes(String retorno) {
        return request.getParameter(retorno);
    }

    

    
}