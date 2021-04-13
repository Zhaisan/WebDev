from django.shortcuts import render
import json
from django.http.response import JsonResponse
from api.models import *
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(company.to_json())


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.save()
        return JsonResponse(company.to_json())

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancies.all()
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancies.name = data['name']
        vacancies.save()
        return JsonResponse(vacancies.to_json())

    elif request.method == 'DELETE':
        vacancies.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.save()
        return JsonResponse(vacancy.to_json())

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


def top10_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(vacancy.to_json())
