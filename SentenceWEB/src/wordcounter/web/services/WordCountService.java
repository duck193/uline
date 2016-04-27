package wordcounter.web.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import wordcounter.web.SentenceServiceImpl;

@RestController
public class WordCountService {

	@Autowired
    private SentenceServiceImpl ssi;
	
	@RequestMapping(value="/countwords", method=RequestMethod.POST)
	public List<WordCount> countWords(@RequestParam("sortType") String sortType, @RequestParam("sentence") String sentence) {
		List<WordCount> countedWords = new ArrayList<>();
		 ssi.getCountedWords(sentence, sortType).forEach((k,v) -> countedWords.add(new WordCount(k, v.toString())));
		 return countedWords;
	}
}
