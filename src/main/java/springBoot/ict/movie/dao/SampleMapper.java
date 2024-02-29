package springBoot.ict.movie.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import springBoot.ict.movie.dto.SampleDTO;


@Mapper
public interface SampleMapper {
	// 상품 목록
	public List<SampleDTO> sampleList();		
	// 상품 등록
	public int insertSample(SampleDTO dto);
	
	// 상품 수정
	public int updateSample(SampleDTO dto);
	
	// 상품 삭제
	public int deleteSample(int id);
	
	// 상품 상세
	public SampleDTO findById(int id);
}
