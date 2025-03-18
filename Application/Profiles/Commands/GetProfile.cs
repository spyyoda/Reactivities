using System;
using System.Security.Cryptography.X509Certificates;
using Application.Core;
using Application.Profiles.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles.Commands;

public class GetProfile
{
    public class Query : IRequest<Result<UserProfile>>
    {
        public required string UserId { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, Result<UserProfile>>
    {
        public async Task<Result<UserProfile>> Handle(Query request, CancellationToken cancellationToken)
        {
            var profile = await context.Users.ProjectTo<UserProfile>(mapper.ConfigurationProvider).SingleOrDefaultAsync(x => x.Id == request.UserId, cancellationToken);

            return profile == null ? Result<UserProfile>.Failure("Could not find user profile", 400) : Result<UserProfile>.Success(profile);

        }
    }

}
