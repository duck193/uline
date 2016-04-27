package wordcounter.web.services;

public class WordCount {

	private final String word;
	private final String occurances;
	
	public WordCount(String word, String occurs) {
		this.word = word;
		this.occurances = occurs;
	}
	
	public String getWord() {
		return word;
	}
	
	public String getOccurances() {
		return occurances;
	}
}
