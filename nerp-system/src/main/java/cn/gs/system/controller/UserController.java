package cn.gs.system.controller;


import cn.gs.base.AbstractBaseController;
import cn.gs.base.AbstractBaseService;
import cn.gs.base.JsonResult;
import cn.gs.system.model.OrgUnit;
import cn.gs.system.model.OrgUser;
import cn.gs.system.repository.OrgUnitMapper;
import cn.gs.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tk.mybatis.mapper.entity.Example;

import java.util.List;


@RestController
@RequestMapping("system")
public class UserController extends AbstractBaseController<OrgUser> {

    @Autowired
    UserService userService ;


    // 查询所有二级公司的员工
    @RequestMapping("byuserdeptcode")
    public  ResponseEntity<JsonResult> findOrgUser(String userdeptcode){
        OrgUser orgUser = new OrgUser();
        System.out.println(userdeptcode);
        orgUser.setUserDeptcode(userdeptcode);



        return entityResult(userService.findAllUser(orgUser));
    }



    @Override
    public AbstractBaseService<OrgUser> getService() {
        return userService;
    }
}
