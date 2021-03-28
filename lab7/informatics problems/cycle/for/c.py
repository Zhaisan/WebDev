a = int(input())
b = int(input())
def root(a, b):
    for x in [i * i for i in range(b + 1) if i * i>= a and i * i <= b]:
        print(x)
root(a, b)