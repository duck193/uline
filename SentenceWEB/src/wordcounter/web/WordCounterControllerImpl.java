package wordcounter.web;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import wordcounter.web.model.ShowSentenceModel;

@Controller
public class WordCounterControllerImpl implements WordCounterController {

    @Autowired
    private SentenceServiceImpl ssi;

    public WordCounterControllerImpl() {
    }

    @RequestMapping(value="/showSentence", method=RequestMethod.GET)
    public String getHome(Model model) {
        model.addAttribute("showSentence", new ShowSentenceModel());
        ModelAndView index = new ModelAndView("showSentence");
        index.setViewName("showSentence");
        return "showSentence";
    }	

    @RequestMapping(value="/sentenceSort", method=RequestMethod.POST)
    public String getView(@RequestParam("nextPage") String nextPage, @RequestParam("sentence") String sentence, @RequestParam("sortType") String sortType, Model model) {
        String newView;
        if(nextPage.equals("showResults")) {
            model.addAttribute("sortedMap", getResultList(sortSentence(sentence, sortType)));
            model.addAttribute("sentence", sentence);
            model.addAttribute("sortType", sortType);
            newView = "showResults";
        }
        else { 
            model.addAttribute("sentence", sentence);
            model.addAttribute("sortType", sortType);
            newView = "showSentence";
        }
        return newView;
    }

    @Override
    public Map<String, Integer> sortSentence(String sentence, String sortType) {
        return ssi.getCountedWords(sentence, sortType);
    }

    @Override
    public List<String> getResultList(Map<String, Integer> sortedMap) {
        List<Entry<String, Integer>> entryList = new LinkedList<Entry<String, Integer>>(sortedMap.entrySet());
        List<String> stringOutput = new LinkedList<String>();
        entryList.forEach((@SuppressWarnings("rawtypes") Entry entry)-> stringOutput.add(entry.getKey() + " : " + entry.getValue()));
        return stringOutput;
    }

    public void setSSI(SentenceServiceImpl serviceImpl) {
        this.ssi = serviceImpl;
    }
}
