package cn.gs.system.repository;

import cn.gs.base.IBaseMapper;
import cn.gs.system.model.OrgUnit;
import cn.gs.system.model.OrgUnitTotal;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface   OrgUnitTotalMapper{

    @Select("select  a.*,b.count_child_count as count_child_count from org_unit a LEFT JOIN (\n" +
            "select unit_parentcode,count(*) count_child_count from org_unit where unit_propertylevel = (#{integer}+1) group by unit_parentcode)\n" +
            "b on b.unit_parentcode = a.unit_deptcode where a.unit_propertylevel = #{integer}")
    @Results({
            @Result(id =true , column = "unit_name" , property ="unitName" ),
            @Result(column = "count_child_count" , property ="countChildCount" ),
            @Result(column = "unit_deptcode" , property ="unitDeptcode" )
    })
    List<OrgUnitTotal> findAllByropertylevel(Integer integer);

}