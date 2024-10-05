def generate_multiples_and_reverse(n, count):
    multiples = [n * i for i in range(1, count + 1)]
    return multiples[::-1]  # Reversing the list

# Example usage
number = 5
count = 10
result = generate_multiples_and_reverse(number, count)
print(result)  # Output: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5]
