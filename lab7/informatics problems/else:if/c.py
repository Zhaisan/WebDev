# a = int(input())
# b = int(input())
# x = a // 1000
# x4 = a % 10
# x3 = (a // 10) % 10
# x2 = (a // 100) % 10
# x1 = a // 1000
# if((x) >= 1):
#     if(x1 == x4 and x2 == x3):
#         if(b == 1):
#             print("YES")
#         else:
#             print("NO")
#     else:
#         if(b != 1):
#             print("YES")
#         else:
#             print("NO")
# else:
#     if(b == 1):
#         print("NO")
#     else:
#         print("YES")
a = int(input())
b = int(input())
if (a != 1 and b != 1) or (a == 1 and b == 1):
    print("YES")
else:
    print("NO")