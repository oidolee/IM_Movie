package springBoot.ict.movie.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.ict.movie.dao.SampleMapper;
import springBoot.ict.movie.dto.SampleDTO;

@Service
public class SampleServiceImpl implements SampleService {

	@Autowired
	private SampleMapper dao;
	
	// 상품 목록
	@Override
	public List<SampleDTO> listAll() 
			throws ServletException, IOException {
		System.out.println("서비스 - listAll");
		
		List<SampleDTO> list = dao.sampleList();
		System.out.println("list : " + list);
		return list;
	}

	// 상품 등록
	@Override
	public int insertSample(SampleDTO dto) 
			throws ServletException, IOException {
		int insertCnt = dao.insertSample(dto);
		return insertCnt;
	}

	// 상품 수정
	@Override
	public int updateSample(SampleDTO dto) 
			throws ServletException, IOException {
		System.out.println("서비스 - updateSample dto : " + dto.toString());
		int updateCnt = dao.updateSample(dto);
		System.out.println("  updateCnt : " + updateCnt);
		
		return updateCnt;
	}

	// 상품 삭제
	@Override
	public int deleteSample(int id) 
			throws ServletException, IOException {
		System.out.println("서비스 - deleteSample");
		int deleteCnt = dao.deleteSample(id);
		return deleteCnt;
	}

	// 상품 상세
	@Override
	public SampleDTO findById(int id) 
			throws ServletException, IOException {
		System.out.println("서비스 - findById");
		SampleDTO dto = dao.findById(id);
		System.out.println(" dto  : " + dto);
		return dto;
	}

}
