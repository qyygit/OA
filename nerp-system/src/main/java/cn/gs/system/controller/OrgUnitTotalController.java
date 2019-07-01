package cn.gs.system.controller;

import cn.gs.base.AbstractBaseController;
import cn.gs.base.AbstractBaseService;
import cn.gs.base.JsonResult;
import cn.gs.system.model.OrgUnit;
import cn.gs.system.service.OrgUnitService;
import cn.gs.system.service.OrgUnitTotalService;
import io.swagger.annotations.Api;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 日志管理
 * @author wangshaodong
 * @date 2018年2月6日
 */
@Log4j2
@Api(tags={"系统 - 部门管理"})
@RestController
@RequestMapping("system/unit")
public class OrgUnitTotalController{

	@Autowired
	OrgUnitTotalService orgUnitTotalService;


	//查询所有二级公司
	@RequestMapping("findbyunitpropertylevel2")
	public Object findByPropertylevel1(Integer unitpropertylevel){
		/*OrgUnit orgUnit = new OrgUnit();
		orgUnit.setUnitPropertylevel(unitpropertylevel);*/
		return  orgUnitTotalService.finaAllUnit(unitpropertylevel);
	}
	@RequestMapping("findbyunitparentcode3")
	public Object findByUnitParentcode(Integer integer,String unitparentcode){
		/*OrgUnit orgUnit = new OrgUnit();
		orgUnit.setUnitPropertylevel(unitpropertylevel);*/
		return  orgUnitTotalService.finaUnit(integer , unitparentcode);
	}
}
