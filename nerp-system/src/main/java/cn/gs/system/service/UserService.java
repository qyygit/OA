package cn.gs.system.service;


import cn.gs.base.AbstractBaseService;
import cn.gs.base.IBaseMapper;
import cn.gs.base.JsonResult;
import cn.gs.system.model.OrgUnit;
import cn.gs.system.model.OrgUser;
import cn.gs.system.repository.OrgUnitMapper;
import cn.gs.system.repository.OrgUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService extends AbstractBaseService<OrgUser> {

    @Autowired
    OrgUserMapper orgUserMapper ;




    public List<OrgUser> findAllUser(OrgUser orgUser){
        return this.getListAll(orgUser);
    }

    @Override
    public IBaseMapper<OrgUser> getRepository() {
        return orgUserMapper;
    }
}
