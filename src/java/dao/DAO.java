package dao;

import java.util.List;

public abstract class DAO {

	
	public abstract boolean create() ;

	public abstract List<?> read(); 
	

	public abstract boolean update();

	public abstract boolean delete(int id);
	

}
