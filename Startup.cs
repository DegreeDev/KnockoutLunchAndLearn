using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KnockoutLunchAndLearn.Startup))]
namespace KnockoutLunchAndLearn
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
