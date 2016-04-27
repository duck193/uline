package wordcounter.web;

import java.util.Map;
import com.sentence.*;

public interface SentenceService {
    public CountWords wordCounter(String sentence);
    public Map<String, Integer> getCountedWords(String sentence, String sortType);
}
