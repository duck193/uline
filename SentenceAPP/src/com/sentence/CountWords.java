package com.sentence;

import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class CountWords {
	
	private Map<String, Integer> words = new HashMap<>();
	
	public CountWords() {
	}
	
	public CountWords(String[] inputArray) {
		countWords(inputArray);
	}
	
	public CountWords(String input) {
		countWords(input.split("[ ]"));
	}
	
	private void countWords(String[] inputArray) {
		for(String arrayData : inputArray) {
			String[] wordArray = removeSpecialChars(arrayData);
			words.put(wordArray[0], ((words.containsKey(wordArray[0])) ? new Integer(words.get(wordArray[0])+wordArray.length) : new Integer(wordArray.length)));
		}
	}
	
	private String[] removeSpecialChars(String input) {
		return input.replaceAll("[!#%&*,.]", " ").split("[ ]");
	}
	
	/**
	 * GetWords
	 **
	 * @return
	 */
	public Map<String, Integer> getWords() {
		return new HashMap<String, Integer>(words);
	}
	
	/**
	 * MapSorter
	 **
	 * @param someMap
	 * @return
	 */
	@SuppressWarnings("all")
	public Map<String, Integer> mapSorter(Map<String, Integer> someMap, String sortType) {
		List<Entry> entries = new LinkedList(someMap.entrySet());
		
		// Original Comparator version
		switch (sortType.toUpperCase()) {
			case "KEY" :
				//Collections.sort(entries, this.KEY);
		        entries.sort((Entry o1, Entry o2) -> ((String)o1.getKey()).toLowerCase().compareTo(((String)o2.getKey()).toLowerCase()));
				break;
	
			case "VALUE" :
				//Collections.sort(entries, this.VALUE);
				entries.sort((Entry o1, Entry o2) ->((Integer)o1.getValue()) - ((Integer)o2.getValue()));
		        break;
		}
        // Here I am copying the sorted list in HashMap
        // using LinkedHashMap to preserve the insertion order
        HashMap sortedHashMap = new LinkedHashMap();
        entries.forEach((Entry) -> sortedHashMap.put(Entry.getKey(), Entry.getValue()));
        return sortedHashMap;
	}
	
	/**
	 * KEY, VALUE
	 **
	 * Comparators for Key and Values of Map.entry
	 */
	@SuppressWarnings("all")
	private Comparator<Entry> KEY = (o1, o2) -> ((String)o1.getKey()).toLowerCase().compareTo(((String)o2.getKey()).toLowerCase());
	@SuppressWarnings("all")
	private Comparator<Entry> VALUE = (o1, o2) -> ((Integer)o1.getValue()) - ((Integer)o2.getValue());
}
