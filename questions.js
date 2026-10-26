const QUESTIONS = {
 "unit3": [
  {
   "q": "Which ordering of catch blocks compiles correctly?",
   "o": [
    "catch (IOException e) { } followed by catch (FileNotFoundException e) { }",
    "catch (FileNotFoundException e) { } followed by catch (IOException e) { }",
    "catch (Exception e) { } followed by catch (RuntimeException e) { }",
    "catch (Throwable t) { } followed by catch (Error e) { }"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\ninterface Greeter { String name(); default void greet() { System.out.println(\"Hi \" + name()); } }\nGreeter g = new Greeter() { public String name() { return \"Sam\"; } };\ng.greet();",
   "o": [
    "Hi name",
    "Hi null",
    "Hi Sam",
    "Compile-time error"
   ],
   "a": 2
  },
  {
   "q": "Which built-in package is imported automatically into every Java source file?",
   "o": [
    "java.util",
    "java.lang",
    "java.io",
    "java.awt"
   ],
   "a": 1
  },
  {
   "q": "Which exception is thrown by the following code?\nString s = null;\nint n = s.length();",
   "o": [
    "IllegalStateException",
    "StringIndexOutOfBoundsException",
    "NullPointerException",
    "ArithmeticException"
   ],
   "a": 2
  },
  {
   "q": "Which objects can be thrown using the throw statement?",
   "o": [
    "Any object of the Throwable class or its subclasses",
    "Any object of the Object class",
    "Only objects of Exception and its subclasses",
    "Only objects of RuntimeException and its subclasses"
   ],
   "a": 0
  },
  {
   "q": "Circle implements Shape and also has an extra method radius(). Given Shape s = new Circle();, which statement is true?",
   "o": [
    "Through s, all methods of Circle can be called directly",
    "The code causes a compile-time error",
    "The code throws a ClassCastException at runtime",
    "Through s, only methods declared in Shape can be called without a cast"
   ],
   "a": 3
  },
  {
   "q": "Hello.java declares package app.util; and has been compiled with javac -d . Hello.java. Which command runs it from the directory that contains the app folder?",
   "o": [
    "java app.util.Hello",
    "java Hello",
    "java app.util.Hello.class",
    "java -package app.util Hello"
   ],
   "a": 0
  },
  {
   "q": "Which of the following is an Error and not an Exception?",
   "o": [
    "NullPointerException",
    "OutOfMemoryError",
    "IOException",
    "ClassCastException"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\nstatic int f() { try { throw new RuntimeException(); } finally { return 5; } }\npublic static void main(String[] a) { System.out.print(f()); }",
   "o": [
    "A RuntimeException is thrown",
    "0",
    "5",
    "Compile-time error"
   ],
   "a": 2
  },
  {
   "q": "Package p1 contains: public class A { int x = 10; }\nIn package p2: import p1.A;\npublic class B { void f() { System.out.println(new A().x); } }\nWhat is the result?",
   "o": [
    "It prints 10",
    "It prints 0",
    "Compile-time error, because x has default access and is not visible outside p1",
    "It compiles but throws an IllegalAccessException at runtime"
   ],
   "a": 2
  },
  {
   "q": "A and B are classes, and I1 and I2 are interfaces. Which declaration causes a compile-time error?",
   "o": [
    "class D implements I1, I2 { }",
    "class D extends A implements I1, I2 { }",
    "interface I3 extends I1, I2 { }",
    "class D extends A, B { }"
   ],
   "a": 3
  },
  {
   "q": "interface Shape { double PI = 3.14; }\nWhat is the result of the statement Shape.PI = 3.0; ?",
   "o": [
    "It changes PI to 3.0",
    "It compiles but throws an exception at runtime",
    "It changes PI only for the current object",
    "Compile-time error, because interface constants are final"
   ],
   "a": 3
  },
  {
   "q": "Which situation typically causes a StackOverflowError?",
   "o": [
    "Accessing an array element outside its bounds",
    "Dividing an integer by zero",
    "A method that calls itself recursively without a terminating condition",
    "Opening a file that does not exist"
   ],
   "a": 2
  },
  {
   "q": "A method is declared as void m() throws IOException, SQLException. What must a caller of m() do?",
   "o": [
    "Handle both checked exceptions with try-catch or declare them in its own throws clause",
    "Nothing, because exceptions in a throws clause are unchecked",
    "Handle only IOException",
    "Declare them only if the caller is main()"
   ],
   "a": 0
  },
  {
   "q": "Which statement about default methods in an interface is true?",
   "o": [
    "An implementing class may override them",
    "Every implementing class must override them",
    "They are implicitly final and cannot be overridden",
    "They are implicitly static"
   ],
   "a": 0
  },
  {
   "q": "What is the output?\ninterface Animal { void sound(); }\nclass Dog implements Animal { public void sound() { System.out.println(\"Bark\"); } }\nAnimal a = new Dog();\na.sound();",
   "o": [
    "Animal",
    "No output",
    "Compile-time error",
    "Bark"
   ],
   "a": 3
  },
  {
   "q": "What is the output?\ntry {\n  try { int[] a = new int[2]; a[2] = 1; }\n  catch (ArithmeticException e) { System.out.print(\"X\"); }\n  System.out.print(\"Y\");\n} catch (ArrayIndexOutOfBoundsException e) { System.out.print(\"Z\"); }",
   "o": [
    "XYZ",
    "Z",
    "XY",
    "YZ"
   ],
   "a": 1
  },
  {
   "q": "Which of the following is an unchecked exception?",
   "o": [
    "IllegalArgumentException",
    "FileNotFoundException",
    "InterruptedException",
    "ClassNotFoundException"
   ],
   "a": 0
  },
  {
   "q": "Resources declared in the header of a try-with-resources statement are implicitly:",
   "o": [
    "static",
    "final",
    "volatile",
    "transient"
   ],
   "a": 1
  },
  {
   "q": "In which situation does the finally block NOT execute?",
   "o": [
    "When the try block throws an exception",
    "When the try block contains a return statement",
    "When a catch block handles an exception",
    "When System.exit(0) is called inside the try block"
   ],
   "a": 3
  },
  {
   "q": "When several catch blocks follow one try block and an exception occurs, which catch block(s) execute?",
   "o": [
    "All catch blocks whose types match, in order",
    "The last catch block whose type matches",
    "Every catch block, one after another",
    "Only the first catch block whose type matches the exception"
   ],
   "a": 3
  },
  {
   "q": "Interface Inner is nested inside class Outer. Which class header correctly implements it from outside Outer?",
   "o": [
    "class Impl implements Inner",
    "class Impl implements Outer.Inner",
    "class Impl implements Outer::Inner",
    "class Impl extends Outer.Inner"
   ],
   "a": 1
  },
  {
   "q": "A class whose source file has no package statement belongs to:",
   "o": [
    "The java.lang package",
    "No package, so it cannot be compiled",
    "The package of the first class it imports",
    "The unnamed (default) package"
   ],
   "a": 3
  },
  {
   "q": "When a try-with-resources statement declares several resources, in what order are they closed?",
   "o": [
    "In the reverse order of their declaration",
    "In the same order as their declaration",
    "In alphabetical order of variable names",
    "In random order"
   ],
   "a": 0
  },
  {
   "q": "What is the output?\nimport static java.lang.Math.*;\npublic class Test { public static void main(String[] a) { System.out.println(abs(-5) + max(2, 3)); } }",
   "o": [
    "5",
    "3",
    "Compile-time error",
    "8"
   ],
   "a": 3
  },
  {
   "q": "What is the output?\ntry {\n  try { throw new RuntimeException(\"x\"); }\n  catch (RuntimeException e) { System.out.print(\"1\"); }\n  System.out.print(\"2\");\n} catch (Exception e) { System.out.print(\"3\"); }",
   "o": [
    "1",
    "12",
    "123",
    "13"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\nclass Res implements AutoCloseable { public void close() { System.out.print(\"C\"); } }\ntry (Res r = new Res()) { System.out.print(\"T\"); }\nSystem.out.print(\"E\");",
   "o": [
    "CTE",
    "TEC",
    "TCE",
    "TE"
   ],
   "a": 2
  },
  {
   "q": "Class X implements interfaces I1 and I2, and both declare a default method show() with the same signature. What must X do?",
   "o": [
    "Override show() in X, otherwise a compile-time error occurs",
    "Nothing; the first interface listed wins",
    "Nothing; show() is chosen randomly at runtime",
    "Declare X as final"
   ],
   "a": 0
  },
  {
   "q": "Which of the following is a valid interface declaration?",
   "o": [
    "interface Drawable { void draw() { } }",
    "class interface Drawable { void draw(); }",
    "interface Drawable() { void draw(); }",
    "interface Drawable { void draw(); }"
   ],
   "a": 3
  },
  {
   "q": "Which Throwable method returns the detail message of an exception?",
   "o": [
    "getDetail()",
    "getMessage()",
    "toMessage()",
    "messageOf()"
   ],
   "a": 1
  },
  {
   "q": "Which statement allows you to call sqrt(16) directly, without the Math prefix?",
   "o": [
    "import java.lang.Math.sqrt;",
    "static import java.lang.Math.sqrt;",
    "import static java.lang.Math.sqrt;",
    "import static Math.sqrt;"
   ],
   "a": 2
  },
  {
   "q": "Which of the following is a valid package declaration?",
   "o": [
    "package com.shop.billing",
    "package com.shop.billing;",
    "package: com.shop.billing;",
    "import package com.shop.billing;"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\nclass MyEx extends Exception { MyEx(String m) { super(m); } }\ntry { throw new MyEx(\"Oops\"); }\ncatch (MyEx e) { System.out.println(e.getMessage()); }",
   "o": [
    "MyEx",
    "null",
    "Compile-time error",
    "Oops"
   ],
   "a": 3
  },
  {
   "q": "What is the output?\ntry { int[] a = {1, 2}; System.out.print(a[5]); }\ncatch (ArithmeticException e) { System.out.print(\"A\"); }\ncatch (Exception e) { System.out.print(\"G\"); }\nSystem.out.print(\"E\");",
   "o": [
    "AE",
    "E",
    "GE",
    "Compile-time error"
   ],
   "a": 2
  },
  {
   "q": "Which statement correctly describes unchecked exceptions?",
   "o": [
    "They extend Exception but not RuntimeException and must always be caught",
    "They can only be thrown by the JVM, never by programmers",
    "They extend RuntimeException (or Error) and need not be declared or caught",
    "They extend IOException"
   ],
   "a": 2
  },
  {
   "q": "Which access modifier allows a member to be accessed from a subclass in a different package, but not from a non-subclass in that package?",
   "o": [
    "protected",
    "default (package-private)",
    "private",
    "public"
   ],
   "a": 0
  },
  {
   "q": "What is the output?\ntry { throw new RuntimeException(); }\ncatch (RuntimeException e) { System.out.print(\"C\"); }\nfinally { System.out.print(\"F\"); }",
   "o": [
    "CF",
    "FC",
    "C",
    "F"
   ],
   "a": 0
  },
  {
   "q": "Which statement about the exception hierarchy is correct?",
   "o": [
    "IOException is a subclass of RuntimeException",
    "FileNotFoundException is a subclass of IOException",
    "Error is a subclass of Exception",
    "ArithmeticException is a subclass of IOException"
   ],
   "a": 1
  },
  {
   "q": "interface Animal { }\nclass Dog implements Animal { }\nWhat is the result of: Animal a = new Dog(); Dog d = a; ?",
   "o": [
    "It compiles and runs normally",
    "It compiles but throws ClassCastException",
    "Compile-time error, because an explicit cast to Dog is required",
    "It compiles and d is null"
   ],
   "a": 2
  },
  {
   "q": "An exception is thrown inside one catch block of a try statement. Can the other catch blocks of that same try statement handle it?",
   "o": [
    "Yes, the next matching catch block handles it",
    "Yes, but only if it is a checked exception",
    "No, the exception is silently ignored",
    "No, the exception propagates outward to an enclosing handler or the caller"
   ],
   "a": 3
  },
  {
   "q": "Which of the following package names violates the usual Java naming conventions?",
   "o": [
    "com.mycompany.utils",
    "org.apache.commons",
    "Com.MyCompany.Utils",
    "in.edu.college"
   ],
   "a": 2
  },
  {
   "q": "What is the output?\ninterface A { default void hi() { System.out.println(\"A\"); } }\nclass C implements A { }\nnew C().hi();",
   "o": [
    "No output",
    "A",
    "Compile-time error, because C does not implement hi()",
    "A runtime exception is thrown"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\nstatic int f() { try { return 1; } finally { System.out.print(\"F\"); } }\npublic static void main(String[] a) { System.out.print(f()); }",
   "o": [
    "F1",
    "1F",
    "1",
    "F"
   ],
   "a": 0
  },
  {
   "q": "Which statement imports only the ArrayList class?",
   "o": [
    "import java.util;",
    "include java.util.ArrayList;",
    "import java.util.ArrayList;",
    "using java.util.ArrayList;"
   ],
   "a": 2
  },
  {
   "q": "Which environment variable tells the Java compiler and JVM where to look for user-defined classes and packages?",
   "o": [
    "CLASSPATH",
    "PATH",
    "JAVA_HOME",
    "PACKAGEPATH"
   ],
   "a": 0
  },
  {
   "q": "Can a try-with-resources statement be written without any catch or finally block?",
   "o": [
    "Yes, it is allowed",
    "No, at least one catch block is required",
    "No, a finally block is required",
    "Yes, but only when it declares a single resource"
   ],
   "a": 0
  },
  {
   "q": "Variables declared inside an interface are implicitly:",
   "o": [
    "private and static",
    "protected and final",
    "public and non-static",
    "public, static and final"
   ],
   "a": 3
  },
  {
   "q": "A program has import java.util.*; and import java.sql.*; and then declares Date d; What happens?",
   "o": [
    "java.util.Date is used because util is imported first",
    "java.sql.Date is used because it is more specific",
    "Compile-time error, because the reference to Date is ambiguous",
    "A runtime exception is thrown"
   ],
   "a": 2
  },
  {
   "q": "Which exception is thrown by the following code?\nint[] a = new int[3];\na[3] = 5;",
   "o": [
    "ArrayIndexOutOfBoundsException",
    "NegativeArraySizeException",
    "NullPointerException",
    "ArithmeticException"
   ],
   "a": 0
  },
  {
   "q": "What is the output?\ntry { String s = null; System.out.print(s.length()); }\ncatch (NullPointerException e) { System.out.print(\"N\"); }\ncatch (Exception e) { System.out.print(\"E\"); }",
   "o": [
    "E",
    "N",
    "NE",
    "Compile-time error"
   ],
   "a": 1
  }
 ],
 "unit4": [
  {
   "q": "What happens when an object of a class that does not implement Comparable is added to a TreeSet created with the no-argument constructor?",
   "o": [
    "It is added at the end of the set",
    "It is silently ignored",
    "A compile-time error occurs",
    "ClassCastException is thrown at runtime"
   ],
   "a": 3
  },
  {
   "q": "System.in, System.out and System.err are:",
   "o": [
    "Methods of the System class that must be called to open them",
    "Classes in the java.io package",
    "Constants of type String",
    "Static fields of the System class that are already open and ready to use"
   ],
   "a": 3
  },
  {
   "q": "What does this code print if missing.txt does not exist?\nFile f = new File(\"missing.txt\");\nSystem.out.println(f.exists());",
   "o": [
    "true",
    "false",
    "null",
    "It throws FileNotFoundException"
   ],
   "a": 1
  },
  {
   "q": "Which of the following does NOT extend the Collection interface?",
   "o": [
    "List",
    "Map",
    "Set",
    "Queue"
   ],
   "a": 1
  },
  {
   "q": "What does fis.read(byte[] buf) return when the end of the file has already been reached?",
   "o": [
    "0",
    "null",
    "-1",
    "The length of buf"
   ],
   "a": 2
  },
  {
   "q": "Which Iterator method removes the last element returned by next() from the underlying collection?",
   "o": [
    "delete()",
    "remove()",
    "discard()",
    "removeLast()"
   ],
   "a": 1
  },
  {
   "q": "System.out is an object of which class?",
   "o": [
    "PrintStream",
    "OutputStream",
    "PrintWriter",
    "Writer"
   ],
   "a": 0
  },
  {
   "q": "An object of the java.io.File class represents:",
   "o": [
    "The contents of a file in memory",
    "Only a directory, never a file",
    "An abstract pathname of a file or directory, not its contents",
    "A stream connected to a file"
   ],
   "a": 2
  },
  {
   "q": "Which class is wrapped around a FileWriter to write text through an internal buffer?",
   "o": [
    "BufferedOutputStream",
    "PrintStream",
    "StringWriter",
    "BufferedWriter"
   ],
   "a": 3
  },
  {
   "q": "Which standard stream is intended for displaying error messages?",
   "o": [
    "System.in",
    "System.out",
    "System.log",
    "System.err"
   ],
   "a": 3
  },
  {
   "q": "Which class provides the readObject() method used for deserialization?",
   "o": [
    "ObjectOutputStream",
    "ObjectInputStream",
    "DataInputStream",
    "BufferedReader"
   ],
   "a": 1
  },
  {
   "q": "What does calling close() on a BufferedWriter do with data still in its buffer?",
   "o": [
    "It discards the buffered data",
    "It closes only the buffer and leaves the underlying writer open",
    "It throws an exception if the buffer is not empty",
    "It flushes the buffered data and then closes the underlying writer"
   ],
   "a": 3
  },
  {
   "q": "What is the result of this code?\nList<String> list = new ArrayList<>();\nlist.add(10);",
   "o": [
    "It compiles and stores \"10\"",
    "It compiles but throws ClassCastException at runtime",
    "Compile-time error, because an int cannot be added to a List<String>",
    "It compiles and stores the Integer 10"
   ],
   "a": 2
  },
  {
   "q": "Which LinkedList method removes and returns the first element of the list?",
   "o": [
    "deleteFirst()",
    "popFront()",
    "removeFirst()",
    "takeFirst()"
   ],
   "a": 2
  },
  {
   "q": "What is the output?\nMap<String, Integer> m = new HashMap<>();\nm.put(\"x\", 1); m.put(\"x\", 2);\nSystem.out.println(m.get(\"x\") + \" \" + m.size());",
   "o": [
    "1 2",
    "2 1",
    "1 1",
    "2 2"
   ],
   "a": 1
  },
  {
   "q": "What happens when new FileOutputStream(\"new.txt\") is executed and new.txt does not exist?",
   "o": [
    "FileNotFoundException is thrown",
    "Nothing happens until write() is called, and then an exception is thrown",
    "The file is created",
    "The constructor returns null"
   ],
   "a": 2
  },
  {
   "q": "Which File method returns true if the File object refers to a directory?",
   "o": [
    "isDirectory()",
    "isFolder()",
    "isDir()",
    "directory()"
   ],
   "a": 0
  },
  {
   "q": "Which BufferedReader constructor call is valid?",
   "o": [
    "new BufferedReader(new FileReader(\"a.txt\"))",
    "new BufferedReader(\"a.txt\")",
    "new BufferedReader(new FileInputStream(\"a.txt\"))",
    "new BufferedReader(new File(\"a.txt\"))"
   ],
   "a": 0
  },
  {
   "q": "Which statement about the Map interface is correct?",
   "o": [
    "A Map can contain duplicate keys but only unique values",
    "A Map extends the Collection interface",
    "A Map always keeps its entries in insertion order",
    "A Map cannot contain duplicate keys, and each key maps to at most one value"
   ],
   "a": 3
  },
  {
   "q": "A file data.txt contains only the text A. What does System.out.println(new FileInputStream(\"data.txt\").read()); print? (Assume exceptions are handled.)",
   "o": [
    "A",
    "1",
    "-1",
    "65"
   ],
   "a": 3
  },
  {
   "q": "What does o.txt contain after this code runs?\nFileWriter fw = new FileWriter(\"o.txt\");\nfw.write(\"Hi\");\nfw.write(65);\nfw.close();",
   "o": [
    "Hi65",
    "HiA",
    "Hi",
    "A"
   ],
   "a": 1
  },
  {
   "q": "Which TreeMap method returns the smallest key in the map?",
   "o": [
    "firstKey()",
    "minKey()",
    "first()",
    "lowest()"
   ],
   "a": 0
  },
  {
   "q": "PriorityQueue implements which interface?",
   "o": [
    "Queue",
    "List",
    "Set",
    "Map"
   ],
   "a": 0
  },
  {
   "q": "Which of the following classes is synchronized (thread-safe) by default?",
   "o": [
    "ArrayList",
    "LinkedList",
    "HashSet",
    "Vector"
   ],
   "a": 3
  },
  {
   "q": "What does t.txt contain after this code runs?\nbyte[] data = {65, 66, 67};\nFileOutputStream fos = new FileOutputStream(\"t.txt\");\nfos.write(data);\nfos.close();",
   "o": [
    "ABC",
    "656667",
    "65 66 67",
    "[65, 66, 67]"
   ],
   "a": 0
  },
  {
   "q": "What happens by default when new FileWriter(\"a.txt\") is executed and a.txt already exists?",
   "o": [
    "New data is appended at the end",
    "The existing contents are overwritten (the file is truncated)",
    "A FileAlreadyExistsException is thrown",
    "The old file is renamed automatically"
   ],
   "a": 1
  },
  {
   "q": "Which of the following is a character stream class?",
   "o": [
    "FileInputStream",
    "FileReader",
    "FileOutputStream",
    "DataInputStream"
   ],
   "a": 1
  },
  {
   "q": "list contains only three elements. What is thrown by list.get(5)?",
   "o": [
    "NullPointerException",
    "NoSuchElementException",
    "IndexOutOfBoundsException",
    "ArrayStoreException"
   ],
   "a": 2
  },
  {
   "q": "Which exception is thrown by the FileInputStream constructor when the specified file does not exist?",
   "o": [
    "EOFException",
    "NoSuchFileException",
    "FileNotFoundException",
    "NullPointerException"
   ],
   "a": 2
  },
  {
   "q": "Which File method returns the size of a file in bytes?",
   "o": [
    "size()",
    "getSize()",
    "count()",
    "length()"
   ],
   "a": 3
  },
  {
   "q": "Which list implementation is generally the best choice for frequently inserting elements at the beginning of a large list?",
   "o": [
    "LinkedList",
    "ArrayList",
    "Vector",
    "All three perform equally"
   ],
   "a": 0
  },
  {
   "q": "Which statement about null keys is correct?",
   "o": [
    "Both HashMap and TreeMap allow any number of null keys",
    "Neither HashMap nor TreeMap allows a null key",
    "HashMap allows one null key, but TreeMap (natural ordering) throws NullPointerException",
    "TreeMap allows one null key, but HashMap does not"
   ],
   "a": 2
  },
  {
   "q": "Which class (not an interface) of the collections framework provides static utility methods such as sort() and reverse() for lists?",
   "o": [
    "Collections",
    "Collection",
    "Iterable",
    "AbstractList"
   ],
   "a": 0
  },
  {
   "q": "Which statement creates a BufferedReader that reads text from the keyboard?",
   "o": [
    "new BufferedReader(System.in)",
    "new BufferedReader(new InputStreamReader(System.in))",
    "new BufferedReader(new FileReader(System.in))",
    "new BufferedReader(new InputStream(System.in))"
   ],
   "a": 1
  },
  {
   "q": "Which exception is thrown when writeObject() is given an object whose class does not implement Serializable?",
   "o": [
    "ClassCastException",
    "NotSerializableException",
    "IllegalStateException",
    "InvalidClassException"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\nList<Integer> l = new ArrayList<>(Arrays.asList(1, 2, 3));\nListIterator<Integer> it = l.listIterator(l.size());\nwhile (it.hasPrevious()) System.out.print(it.previous());",
   "o": [
    "321",
    "123",
    "3",
    "Compile-time error"
   ],
   "a": 0
  },
  {
   "q": "A file a.txt contains the single line Hello. What does this code print?\nBufferedReader br = new BufferedReader(new FileReader(\"a.txt\"));\nSystem.out.println(br.readLine());\nSystem.out.println(br.readLine());",
   "o": [
    "Hello followed by Hello",
    "Hello followed by null",
    "Hello followed by an empty line",
    "Hello followed by an EOFException"
   ],
   "a": 1
  },
  {
   "q": "What is the output?\nVector<Integer> v = new Vector<>();\nv.add(10); v.add(20); v.add(30);\nSystem.out.println(v.firstElement() + v.lastElement());",
   "o": [
    "1030",
    "30",
    "Compile-time error",
    "40"
   ],
   "a": 3
  },
  {
   "q": "What happens when add() is called on a HashSet with an element that is already present?",
   "o": [
    "IllegalArgumentException is thrown",
    "add() returns false and the set is left unchanged",
    "The new element replaces the old one and add() returns true",
    "A second copy of the element is stored"
   ],
   "a": 1
  },
  {
   "q": "What is the main advantage of using generics with collections?",
   "o": [
    "Compile-time type safety and no need for explicit casts",
    "Faster execution because primitives are stored directly",
    "It allows primitive types as type arguments",
    "It removes the need for the Collections framework"
   ],
   "a": 0
  },
  {
   "q": "By default, System.in reads data from:",
   "o": [
    "A file named in.txt in the current directory",
    "The keyboard (standard input)",
    "The console's output buffer",
    "A network socket"
   ],
   "a": 1
  },
  {
   "q": "Which OutputStream method writes a single byte?",
   "o": [
    "writeByte(byte b)",
    "put(int b)",
    "write(int b)",
    "send(int b)"
   ],
   "a": 2
  },
  {
   "q": "What is the output?\nList<Integer> l = new ArrayList<>(Arrays.asList(10, 20, 30));\nl.remove(1);\nSystem.out.println(l);",
   "o": [
    "[10, 30]",
    "[20, 30]",
    "[10, 20, 30]",
    "[10, 20]"
   ],
   "a": 0
  },
  {
   "q": "Which class is the abstract superclass of all byte output streams?",
   "o": [
    "Writer",
    "PrintStream",
    "FileOutputStream",
    "OutputStream"
   ],
   "a": 3
  },
  {
   "q": "What is the output?\nSet<Integer> ts = new TreeSet<>();\nts.add(30); ts.add(10); ts.add(20);\nSystem.out.println(ts);",
   "o": [
    "[30, 10, 20]",
    "[10, 30, 20]",
    "[10, 20, 30]",
    "[20, 10, 30]"
   ],
   "a": 2
  },
  {
   "q": "Which InputStream method returns an estimate of the number of bytes that can be read without blocking?",
   "o": [
    "size()",
    "length()",
    "available()",
    "remaining()"
   ],
   "a": 2
  },
  {
   "q": "In Java I/O, a stream is best described as:",
   "o": [
    "A sequence of data flowing between a source and a destination",
    "A fixed-size array of bytes in memory",
    "A thread that reads files",
    "A database connection"
   ],
   "a": 0
  },
  {
   "q": "Which declaration of a map with String keys and Integer values is valid?",
   "o": [
    "Map<String, int> m = new HashMap<>();",
    "Map<String> m = new HashMap<>();",
    "Map<String, Integer> m = new HashMap<>();",
    "Map<String, Integer> m = new Map<>();"
   ],
   "a": 2
  },
  {
   "q": "What is the output?\nList<String> l = new ArrayList<>();\nl.add(\"A\"); l.add(\"B\"); l.add(\"C\");\nl.remove(\"B\");\nSystem.out.println(l);",
   "o": [
    "[A, B]",
    "[B, C]",
    "[C]",
    "[A, C]"
   ],
   "a": 3
  },
  {
   "q": "Which keyword marks a field so that it is NOT saved during default serialization?",
   "o": [
    "transient",
    "volatile",
    "static final",
    "private"
   ],
   "a": 0
  }
 ]
};