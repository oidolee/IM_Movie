package springBoot.ict.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import springBoot.ict.movie.dto.CustomerDTO;

@Mapper
public interface CustomerMapper {
	
	//고객 목록
	public List<CustomerDTO> customerList();
	
	// 회원가입
	public int insertCustomer(CustomerDTO dto);

}
