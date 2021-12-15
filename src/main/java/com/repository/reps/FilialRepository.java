package com.repository.reps;

import com.dto.FilialDto;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.jooq.codegen.maven.example.tables.Filials.FILIALS;

@Repository
public class FilialRepository {
    private final DSLContext dsl;

    @Autowired
    public FilialRepository(DSLContext dsl) {
        this.dsl = dsl;
    }

    public List<FilialDto> findAll(){
        return dsl.selectFrom(FILIALS)
                .fetch()
                .into(FilialDto.class);
    }

}
