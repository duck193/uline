package wordcounter.web.model;

import java.util.List;

/**
 * @author Joseph Richard
 */
public class ShowSentenceModel {
    private String appPage;
    private String sortType;
    private String sentence;
    private List<String> result;
    
    public String getAppPage() {
        return appPage;
    }

    public void setAppPage(String appPage) {
        this.appPage = appPage;
    }

    public String getSortType() {
        return sortType;
    }

    public void setSortType(String sortType) {
        this.sortType = sortType;
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }
 
    public void setResult(List<String> result) {
        this.result = result;
    }
    
    public List<String> getResult() {
        return this.result;
    }
}
