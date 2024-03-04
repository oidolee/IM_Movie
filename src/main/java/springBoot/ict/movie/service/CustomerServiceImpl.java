package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.CustomerMapper;
import springBoot.ict.movie.dto.CustomerDTO;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerMapper dao;
	
	
	// 고객 목록
	@Override
	public List<CustomerDTO> listAll() 
			throws ServletException, IOException {
		System.out.println("CustomerServiceImpl - listAll");
		
		List<CustomerDTO> list = dao.customerList();
		
		return list;
	}

	// 회원 가입
	@Override
	public int insertCustomer(CustomerDTO dto) 
			throws ServletException, IOException {
		System.out.println("CustomerServiceImpl - insertCustomer");
		
		int insertCnt = dao.insertCustomer(dto);
		
		return insertCnt;
	}
	

}
