package com.laptrinhweb.shoesshop.services.impl;


import com.laptrinhweb.shoesshop.converter.CommonConverter;
import com.laptrinhweb.shoesshop.dto.CommonDTO;
import com.laptrinhweb.shoesshop.repositories.CommonRepo;
import com.laptrinhweb.shoesshop.services.ICommonService;

import java.util.ArrayList;
import java.util.List;

public class CommonService<T1 extends CommonDTO<T1>,T2,T3 extends CommonRepo<T2,Long>,T4 extends CommonConverter<T1,T2>> implements ICommonService<T1,T2,T3,T4> {

    public final T3 t3;
    public final T4 t4;
    public CommonService(T3 t3,T4 t4) {
        this.t3 = t3;
        this.t4 = t4;
    }
    public List<T1> getList() {
        List<T1> listDTO = new ArrayList<>();
        List<T2> listEntity = t3.findAll();
        for(int i=0;i<listEntity.size();i++) {
            listDTO.add(t4.toDTO(listEntity.get(i)));
        }
        return listDTO;
    }

    public T1 saveItem (T1 dto) {
        T2 entity = null;
        if(dto.getId()!=null) {
            T2 oldEntity = t3.findOneById(dto.getId());
            entity = t4.toEntity(dto,oldEntity);
        }else {
            entity = t4.toEntity(dto);
        }
        entity = t3.save(entity);
        return t4.toDTO(entity);
    }

    @Override
    public void delete(Long id) {
        T2 entity = t3.findOneById(id);
        t3.delete(entity);
    }

    @Override
    public T1 findById(Long id) {
        return t4.toDTO(t3.findOneById(id));
    }

    @Override
    public Long countItems() {
        return t3.count();
    }

}
