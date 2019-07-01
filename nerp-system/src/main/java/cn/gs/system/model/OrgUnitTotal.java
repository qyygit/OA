package cn.gs.system.model;

import cn.gs.base.entity.IBaseEntity;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
@Data
public class OrgUnitTotal implements Serializable {
    /**
     * 主键
     */
    private Integer unitId;

    /**
     * 单位mdm编码
     */
    private String unitMdmcode;

    /**
     * OA单位编码
     */
    private String unitDeptcode;

    /**
     * 机构简称
     */
    private String unitName;

    /**
     * 机构全称
     */
    private String unitFullname;

    /**
     * 层次名称
     */
    private String unitHierarchyname;

    /**
     * 上级单位编码
     */
    private String unitParentcode;

    /**
     * 机构位置
     */
    private String unitAddress;

    /**
     * 所属站点
     */
    private String unitSitename;

    /**
     * 顶级单位编码
     */
    private String unitTopcode;

    /**
     * 单位类型
     */
    private String unitBusinesstype;

    /**
     * 单位级别
     */
    private Integer unitPropertylevel;

    /**
     * 备注
     */
    private String unitComment;

    /**
     * 排序列
     */
    private Integer unitOrder;

    /**
     * 删除标志
     */
    private String unitDel;

    /**
     * 部门领导
     */
    private String unitDeptleader;

    /**
     * 机构分类 部门：dept,单位:unit
     */
    private String unitCategory;

    /**
     * 创建人
     */
    private String createdBy;

    /**
     * 创建时间
     */
    private String createdTime;

    /**
     * 更新人
     */
    private String updatedBy;

    /**
     * 更新时间
     */
    private String updatedTime;
    /**
     * 子公司数量
     */
    private int countChildCount;

}