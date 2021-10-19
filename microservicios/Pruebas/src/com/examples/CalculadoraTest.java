package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.AfterClass;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class CalculadoraTest {
	Calculadora calc;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		calc = new Calculadora();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest(name = "Suma {index} -> {0} + {1} = {2}")
	@CsvSource({"2,2,4", "0,0,0", "1,-1,0"})
	void testSuma(double a, double b, double rslt) {
		assertEquals(rslt, calc.suma(a,b));
	}

	@Nested
	@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
	class Divisiones{
	@RepeatedTest(value = 5, name = "{displayName}, {currentRepetition}/{totalRepetitions}")
	void test_Divide_Double_Double() {
//		assertEquals(0.5, calc.divide(1.0, 2));
		//assertThrows (Exception.class, () -> calc.divide(1.0, 0));
//		assertEquals(Double.POSITIVE_INFINITY, calc.divide(1.0, 0));
		//var d = 1 / 0;
		assertAll("Divisiones enteras",
				() -> assertEquals(0.5, calc.divide(1.0, 2), "la real"),
				() -> assertEquals(0.5, calc.divide(1, 2), "la entera"),
				() -> assertEquals(Double.POSITIVE_INFINITY, calc.divide(1.0, 0))
				);
	}

	@Test
	@DisplayName("Division entera")
	@Disabled 
	void testDivideIntInt() {
		assertEquals(1, calc.divide(1, 2),"la primera");
		assertEquals(0, calc.divide(1, 0), "la primera");
		assertEquals(0, calc.divide(0, 0), "la segunda");
		assertThrows (Exception.class, () -> calc.divide(1.0, 0));
	}
	}
}