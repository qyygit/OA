package cn.gs.system.repository;

import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.mapstruct.Mapper;

import cn.gs.base.IBaseMapper;
import cn.gs.system.model.OrgUnit;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

@Mapper
public interface OrgUnitMapper extends IBaseMapper<OrgUnit> {

    @Select("select * from org_unit where unit_propertylevel = #{integer}")
    @Results({
            @Result(id =true , column = "unit_fullname" , property ="unitFullname" )
    })
    List<OrgUnit> findAllByropertylevel(Integer integer);

}