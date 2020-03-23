package hamza.backend.ControllerTest;

import hamza.backend.Controller.Api;
import hamza.backend.Service.MatchCount;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApiTest {
    private MockMvc mockMvc;
    @InjectMocks
    Api api;
    @Mock
    MatchCount matchCount;
    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(api).build();

    }

    @Test
    public void should_return_NumberofMatches() throws Exception {
        //setup the mock
        Mockito.when(matchCount.CountMatch("hhvbdjj,ojz;")).thenReturn(2);

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/count")
                .content("hhvbdjj,ojz;")
        ).andExpect(MockMvcResultMatchers.content().string("2"));

    }
}
