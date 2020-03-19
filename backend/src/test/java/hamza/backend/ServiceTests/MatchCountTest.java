package hamza.backend.ServiceTests;

import hamza.backend.Service.MatchCount;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MatchCountTest {


    @InjectMocks
    MatchCount matchCount;

    @Test
    public void itShouldReturnNumberofMatches() {

        String input = "hjhge,ojfz;";
        int expected = 2;
        System.out.println(matchCount.CountMatch(input)+" and the expected is "+expected);
        assertThat(matchCount.CountMatch(input), equalTo(expected));
    }

}
