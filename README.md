# Glucose

Syntactic Sugar for Brainfuck

[Learn more about Brainfuck](https://en.wikipedia.org/wiki/Brainfuck)

## Table of Contents

- [Types](#types)

  - [Signed Integer](#signed-integer)
  - [ASCII Character](#ascii-character)

- [Commands](#commands)

  - [Comments](#comments)
  - [add](#add)
  - [sub](#sub)
  - [set](#set)
  - [mov](#mov)
  - [goto](#goto)
  - [\[](#[)
  - [\]](#])
  - [print](#print)
  - [input](#input)

- [File Extension](#file-extension)

- [Rules for Compilers](#rules-for-compilers)

## Types

### Signed Integer

**Description:** A signed integer is an integer that can either be positive or negative. It _may_ be written in hexadecimal with the prefix `0x` or in binary with the prefix `0b`.

### ASCII Character

**Description:** An ASCII character can be any character from the following table:

![ASCII Table](https://upload.wikimedia.org/wikipedia/commons/c/cf/USASCII_code_chart.png)

**Syntax:** An ASCII character _must_ be surrounded by a pair of single quotes.

## Commands

### Comments

**Description:** Comments start with a `#` character. All comments following this character are ignored until the end of the current line.

### `add`

**Description:** Increase the byte at the data pointer by the supplied amount.

**Arguments:**

- `amount` (`signed int` or `ascii char`)

**Example:**

```bash
add 3 # Add 3 to the current byte.
add 'A' # Add 65 to the current byte.
```

### `sub`

**Description:** Decrease the byte at the data pointer by the supplied amount.

**Arguments:**

- `amount` (`signed int` or `ascii char`)

**Example:**

```bash
sub 3 # Subtract 3 to the current byte.
sub 'A' # Subtract 65 to the current byte.
```

### `set`

**Description:** Set the byte at the data pointer to the supplied value.

**Arguments:**

- `value` (`signed int` or `ascii char`)

**Example:**

```bash
set 3 # Current value: 3
set 'A' # Current value: 65
```

### `mov`

**Description:** Move the data pointer by the supplied amount.

**Arguments:**

- `amount` (`signed int`)

**Example:**

```bash
mov 1 # Increment the data pointer.
mov -1 # Decrement the data pointer.
```

### `goto`

**Description:** Move the data pointer to the supplied memory cell number.

**Arguments:**

- `number` (`signed int`)

**Example:**

```bash
goto 3
set 4 # Cell 3: 4
goto 1
set 2 # Cell 3: 4, Cell 1: 2
```

### `[`

**Description:** If the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it _forward_ to the command after the _matching_ `]` command.

### `]`

**Description:** If the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it _back_ to the command after the _matching_ `[` command.

### `print`

**Description:** Output the byte at the data pointer.

### `input`

**Description:** Accept one byte of input, storing its value in the byte at the data pointer.

## File Extension

All Glucose files _must_ use the `.gluc` file extension.

## Rules for Compilers

- Glucose compilers _may_ allow the user to specify a custom cell size, memory size and memory overflow behavior. Brainfuck _must_ otherwise assume a cell size of 8 bits with an infinite memory size and undefined memory overflow behavior.

- Glucose compilers _must_ throw an error when an unknown command or invalid argument is encountered. Brainfuck code is _not allowed_ within Glucose.

- _Have fun!_
