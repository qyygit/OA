package cn.gs.system.service;

import cn.gs.base.AbstractBaseService;
import cn.gs.base.IBaseMapper;
import cn.gs.system.model.OrgUnit;
import cn.gs.system.model.OrgUnitTotal;
import cn.gs.system.repository.OrgUnitMapper;
import cn.gs.system.repository.OrgUnitTotalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrgUnitTotalService{

	@Autowired
	OrgUnitTotalMapper orgUnitTotalMapper;
	

	public List<OrgUnitTotal> finaAllUnit(Integer integer){
		return orgUnitTotalMapper.findAllByropertylevel(integer);
	}


}
