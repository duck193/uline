package wordcounter.web;

import java.util.HashMap;
import java.util.Map;

import com.sentence.*;

import org.springframework.stereotype.*;

@Service("sentenceServiceImpl")
public class SentenceServiceImpl implements SentenceService {
	
    private Map<String, Integer> uncountedWords = new HashMap<String, Integer>();

    public SentenceServiceImpl() {
    }
    
    public Map<String, Integer> getCountedWords(String sentence, String sortType) {
        CountWords wc = wordCounter(sentence);
        Map<String, Integer> sortedMap = wc.mapSorter(uncountedWords, sortType);
        return sortedMap;
    }

    public CountWords wordCounter(String sentence) {
        CountWords wc = new CountWords(sentence);
        uncountedWords = wc.getWords();
        return wc;
    }
}
