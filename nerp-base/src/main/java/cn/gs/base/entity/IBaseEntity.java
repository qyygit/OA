package cn.gs.base.entity;

import java.io.Serializable;

import com.google.gson.Gson;

/**
 * 实体基类
 * 后缀特性：
 * NoId：无id列， 
 * A: 增加字段 ASSOCIATION_TYPE_ 、 ASSOCIATION_ID_
 * C: CREATE_TIME_ 、 CREATE_USER_ID_
 * U: LAST_MODIFIED_TIME_ 、 LAST_MODIFIED_USER_ID_
 * D: DELETE_TIME_ 、 DELETE_USER_ID_ 、 IS_DELETE_
 * @author 王少东
 * @date 2019年6月17日
 */

public interface IBaseEntity extends Serializable{
	
}
