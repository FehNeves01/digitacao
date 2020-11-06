package toolBox;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class EnviaJSON {
	private static Gson g;

	private static void inserirCabecalhoJSON(HttpServletResponse response) {
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		
		response.addHeader("teste", "Teste1");
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
	}

	public static void enviaJson(HttpServletResponse response, String stringParaJson) {
		g = new Gson();
		inserirCabecalhoJSON(response);

		String jsonConvertido = g.toJson(" JSON String  || " + stringParaJson);
		System.out.println(jsonConvertido);

		try (PrintWriter out = response.getWriter()) {
			out.print(stringParaJson);
			out.flush();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void enviaJson(HttpServletResponse response, List<?> listToJson) {
		g = new Gson();
		inserirCabecalhoJSON(response);
		try (PrintWriter out = response.getWriter()) {
			System.out.println(g.toJson(listToJson));
			out.print(g.toJson(listToJson));
			out.flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
