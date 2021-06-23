package com.laptrinhweb.shoesshop.repositories;

import com.laptrinhweb.shoesshop.dto.ProductPage;
import com.laptrinhweb.shoesshop.dto.ProductSearchCriteria;
import com.laptrinhweb.shoesshop.entity.BrandEntity;
import com.laptrinhweb.shoesshop.entity.ColorEntity;
import com.laptrinhweb.shoesshop.entity.ProductEntity;
import com.laptrinhweb.shoesshop.entity.SizeEntity;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Repository
public class ProductCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public ProductCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    public List<ProductEntity> findAllWithFilters(ProductPage productPage,
                                                  ProductSearchCriteria productSearchCriteria) {
        CriteriaQuery<ProductEntity> criteriaQuery = criteriaBuilder.createQuery(ProductEntity.class);
        Root<ProductEntity> productEntityRoot = criteriaQuery.from(ProductEntity.class);
        Predicate predicate = getPredicate(productSearchCriteria,productEntityRoot);
        criteriaQuery.where(predicate);
        TypedQuery<ProductEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setFirstResult((productPage.getPageNumber()-1)*productPage.getPageSize());
        typedQuery.setMaxResults(productPage.getPageSize());
        List<ProductEntity> list = typedQuery.getResultList();
        return list;
    }

    public int countProductsWithFilter(ProductSearchCriteria productSearchCriteria) {
        CriteriaQuery<ProductEntity> criteriaQuery = criteriaBuilder.createQuery(ProductEntity.class);
        Root<ProductEntity> productEntityRoot = criteriaQuery.from(ProductEntity.class);
        Predicate predicate = getPredicate(productSearchCriteria,productEntityRoot);
        criteriaQuery.where(predicate);
        TypedQuery<ProductEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        List<ProductEntity> list = typedQuery.getResultList();
        return list.size();
    }



    private Predicate getPredicate(ProductSearchCriteria productSearchCriteria, Root<ProductEntity> productEntityRoot) {
        List<Predicate> predicates = new ArrayList<>();
        if(Objects.nonNull(productSearchCriteria.getBrand())) {
            Join<ProductEntity,BrandEntity> brands =productEntityRoot.join("brand");
            predicates.add(criteriaBuilder.equal(brands.get("id"),productSearchCriteria.getBrand()));
        }
        if(Objects.nonNull(productSearchCriteria.getColor())) {
            Join<ProductEntity, ColorEntity> colors =productEntityRoot.join("color");
            predicates.add(criteriaBuilder.equal(colors.get("id"),productSearchCriteria.getColor()));
        }
        if(Objects.nonNull(productSearchCriteria.getWidth())) {
            Join<ProductEntity, ColorEntity> widths =productEntityRoot.join("width");
            predicates.add(criteriaBuilder.equal(widths.get("id"),productSearchCriteria.getWidth()));
        }
        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
    private Pageable getPageable(ProductPage productPage) {
        return PageRequest.of(productPage.getPageNumber(),productPage.getPageSize());
    }
    private long getProductsCount(Predicate predicate) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<ProductEntity> countRoot = countQuery.from(ProductEntity.class);
        Join<ProductEntity,BrandEntity> brands =countRoot.join("brand");
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
