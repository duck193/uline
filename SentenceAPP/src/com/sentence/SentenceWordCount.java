package com.sentence;

import java.util.Map;

public class SentenceWordCount {

	private static String sentence = "This is a new way in to count how many times one string, can have two#two or more three!three!three numbers written in four*four*four*four.";
	
	public static void main(String[] args) {
		CountWords cw;
		if(args.length>0) {
			cw = new CountWords(args);
		}
		else {
			cw = new CountWords(sentence);
		}
		
		Map<String, Integer> wordsOriginalOrder = cw.getWords();

		// Key Sort Order
		System.out.println("Alphanumeric Key Sort");
		Map<String, Integer> wordsKeySortedOrder = cw.mapSorter(wordsOriginalOrder, "Key");
		wordsKeySortedOrder.forEach((k,v) -> System.out.println(k + " : " + v));
		
		// Value Sort Order
		System.out.println("\nNumerical Value Sort");
		Map<String, Integer> wordsValueSortedOrder = cw.mapSorter(wordsOriginalOrder, "Value");
		wordsValueSortedOrder.forEach((k,v) -> System.out.println(k + " : " + v));
	}

}

