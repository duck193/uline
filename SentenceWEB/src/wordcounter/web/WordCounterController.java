package wordcounter.web;

import java.util.List;
import java.util.Map;
import org.springframework.ui.Model;

public interface WordCounterController {
	public String getHome(Model model);
	public String getView(String nextPage, String sentence, String sortType, Model model);
	public Map<String, Integer> sortSentence(String sentence, String sortType);
	public List<String> getResultList(Map<String, Integer> sortedMap);
}
