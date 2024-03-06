package springBoot.ict.movie.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.ict.movie.dto.CustomerDTO;
import springBoot.ict.movie.dto.SampleDTO;
import springBoot.ict.movie.service.CustomerServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/index")
public class CustomerController {
	@Autowired
	private CustomerServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(SampleController.class);
	
	
	// 회원 가입
	// 상품 등록 (insert)
	@PostMapping
	public Map<String, Object> customerInsert(@RequestBody CustomerDTO dto)
			throws ServletException, IOException {
		logger.info("<<< url - sampleInsert >>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int insertCnt = service.insertCustomer(dto);
			if(insertCnt == 1) {
				resultCode = "200";
				resultMsg = "sampleInsert Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println(" [ customerInsert 성공 ] ");
		
		return map;
	}
	
	 //고객 리스트
	@GetMapping()
	public List<CustomerDTO> customerList(HttpServletRequest req, HttpServletResponse res,Model model)
			throws ServletException, IOException {
		logger.info("<<< url -> customerList");
		
		return service.listcustomer();
	}
		
	
	
	// 로그인 처리
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody CustomerDTO dto)
			throws ServletException, IOException {
		logger.info("<<< url -> login start");
		System.out.println("dto" + dto.toString());
		

		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> response = new HashMap<String, Object>();
		
		try {
			int selectCnt = service.loginCustomer(dto);
			if(selectCnt == 1) {
				resultCode = "200";
				resultMsg = "sampleInsert Success";
				System.out.println(" [ loginCustomer 성공 ] ");
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		response.put("resultCode", resultCode);
		response.put("resultMsg", resultMsg);
		
		
		return response;
	} 
	
	
		

}
