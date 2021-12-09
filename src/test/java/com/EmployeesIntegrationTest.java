package com;

import com.dto.EmployeeDto;
import com.repository.reps.EmployeeRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class EmployeesIntegrationTest {

    @MockBean
    private EmployeeRepository employeeRepository;

    @Before
    public void setUp() {
        EmployeeDto anton = new EmployeeDto();
        EmployeeDto anton1 = new EmployeeDto();
        EmployeeDto anton2 = new EmployeeDto();

        anton.setName("Антон");
        anton.setId(10);

        anton1.setName("Антон1");
        anton1.setId(15);
        anton1.setChiefId(10);


        List<EmployeeDto> all = Arrays.asList(anton, anton1, anton2);

        Mockito.when(employeeRepository.findById(anton.getId()))
                .thenReturn(anton);

        Mockito.when(employeeRepository.findAll())
                .thenReturn(all);

        Mockito.when(employeeRepository.findChiefById(anton1.getId()))
                .thenReturn(anton);
    }

    @Test
    public void whenValidId_thenEmployeeShouldBeFound() {
        Integer id = 10;
        EmployeeDto found = employeeRepository.findById(id);

        assertThat(found.getId())
                .isEqualTo(id);
    }

    @Test
    public void allEmployeesShouldBeFound() {
        List<EmployeeDto> found = employeeRepository.findAll();

        assertThat(found.size())
                .isEqualTo(3);
    }

    @Test
    public void whenValidChiefId_EmployeeShouldBeFound() {
        Integer cid = 10;
        Integer id = 15;
        EmployeeDto found = employeeRepository.findChiefById(id);

        assertThat(found.getId())
                .isEqualTo(cid);
    }
}