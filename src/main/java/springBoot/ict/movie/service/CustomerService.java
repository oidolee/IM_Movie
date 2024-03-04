package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import springBoot.ict.movie.dto.CustomerDTO;

public interface CustomerService {
	
	// 고객목록
	public List<CustomerDTO> listAll()
			throws ServletException, IOException;
	
	// 고객 추가 
	public int insertCustomer(CustomerDTO dto)
			throws ServletException, IOException;

	// 로그인
	public int loginCustomer(String email)
			throws ServletException, IOException;
}
