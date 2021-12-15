package com.controller;

import com.dto.FilialDto;
import com.repository.reps.FilialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/filials")
public class FilialsController {

    private final FilialRepository filialRepository;

    @Autowired
    public FilialsController(FilialRepository filialRepository) {
        this.filialRepository = filialRepository;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<FilialDto> getAll(){
        return filialRepository.findAll();
    }
}