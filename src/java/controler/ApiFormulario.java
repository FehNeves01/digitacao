/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controler;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author felip
 */
@WebServlet(name = "ApiFormulario", urlPatterns = {"/apiformulario"})
public class ApiFormulario extends HttpServlet {

    private HttpServletRequest request;
    private HttpServletResponse response;

    
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

    protected void processRequest()throws ServletException, IOException {
        switch (request.getParameter("acao")) {
            case "cadastraFormulario":
                cadastraFormulario();
                break;
    }

}

    private void cadastraFormulario() {
        
    }
}