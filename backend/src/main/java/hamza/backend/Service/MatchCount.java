package hamza.backend.Service;

import org.springframework.stereotype.Service;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
// service class to count how many times input string have the characters
//: « , » , « . », « ; », « : » , « ! » , « ? »
@Service
public class MatchCount {
    //static regular expression
    private static String RegExp = "\\.|\\;|\\,|\\:|\\!|\\?";
    public int CountMatch(String Input) {
        int count = 0;
        if (Input == "") {
            return  count;
        }
        //pattern object to compile regular expression
        Pattern p = Pattern.compile(RegExp);
        //matcher object interpret the regexp and perform match operations on input
        Matcher m = p.matcher(Input);
        while (m.find()) {
            count++;
        }

        return count;

    }
}