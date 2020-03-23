package hamza.backend.Controller;

import hamza.backend.Service.MatchCount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping(value = "/api")
public class Api {

    @Autowired
    MatchCount matchCount;
    @PostMapping(value = "/count")
    public ResponseEntity<Integer> CountMatch(@RequestBody String input) {

        int numberOfMatches = matchCount.CountMatch(input);
        return new ResponseEntity<Integer>(numberOfMatches, HttpStatus.OK);
    }


}
